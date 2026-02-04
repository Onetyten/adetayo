import { useEffect, useRef, useState } from "react";
import Box from "../../Components/Box";
import { projectDetails } from "../../data/data";
import ConsoleText from "../../ConsoleText";
import ProjectItem from "./ProjectItem.js"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export default function Project() {
    const [currentIndex,setCurrentIndex] = useState(0)
    const leftBoxRef = useRef(null)
    const sectionsRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const boxScrollRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const letterPinRef = useRef<HTMLDivElement | null>(null);
    const entryRef = useRef(null)
    const exitRef = useRef(null)
    const visibilityRef = useRef<boolean[]>([]);
    const [, forceRender] = useState(0);
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 1023px)").matches
    );

    useEffect(() => {
        if (!isMobile) return;
        const onResize = () => {
            visibilityRef.current = visibilityRef.current.map(() => true)
            forceRender(v => v + 1);
        }

        window.addEventListener("resize", onResize)
        return () => window.removeEventListener("resize", onResize);
    }, [isMobile]);

    useEffect(() => {
        const media = window.matchMedia("(max-width: 1023px)");

        const handler = () => {
            setIsMobile(media.matches);
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 100);
        };
        media.addEventListener("change", handler);
        return () => media.removeEventListener("change", handler);
    }, []);


    useEffect(() => {
        let resizeTimer: ReturnType<typeof setTimeout>
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                ScrollTrigger.refresh();
            }, 250);
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimer);
        };
    }, []);
        

    useEffect(() => {
        if (!isMobile) return;
        visibilityRef.current = [];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = itemRefs.current.indexOf(entry.target as HTMLDivElement )
                    if (index === -1) return
                    visibilityRef.current[index] = entry.isIntersecting
                })
                forceRender(v => v + 1)
            },
            { root: null, rootMargin: "-25% 0px -25% 0px", threshold: 0 }
        )

        itemRefs.current.forEach(el => el && observer.observe(el))

        return () => observer.disconnect();
    }, [isMobile]);


    useEffect(()=>{
        if (isMobile) return
        
        const st = ScrollTrigger.create({
            trigger:entryRef.current,
            start:"top top",
            endTrigger:exitRef.current,
            end:"bottom bottom",
            pin:leftBoxRef.current,
            scrub:false,
            pinSpacing:false,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: (self) => {
                if (self.pin) {
                    gsap.set(self.pin, {clearProps: "all"})
                }
            }
        })

        return ()=>{
            st.kill()
            if (leftBoxRef.current) {
                gsap.set(leftBoxRef.current, {clearProps: "all"})
            }
        }
    },[isMobile])

    useEffect(() => {
        if (isMobile) return
        if (!letterPinRef.current || !entryRef.current || !exitRef.current) return;
        
        const st = ScrollTrigger.create({
            trigger: leftBoxRef.current,
            start: "top top",
            endTrigger: exitRef.current,
            end: "bottom bottom",
            pin: letterPinRef.current,
            pinSpacing: false,
            invalidateOnRefresh: true,
        });

        return () => {
            st.kill()
            if (letterPinRef.current) {
                gsap.set(letterPinRef.current, {clearProps: "all"})
            }
        }
    }, [isMobile]);

    useEffect(() => {
        if (isMobile) return;
        const triggers: ScrollTrigger[] = []
        sectionsRef.current.forEach((section, index) => {
            if (!section) return;
            const st = ScrollTrigger.create({
                trigger: section,
                start: "center center",
                end: "center center",
                onEnter: () => setCurrentIndex(index),
                onEnterBack: () => setCurrentIndex(index),
                invalidateOnRefresh: true,
            });
            triggers.push(st);
        });
        return () => {
            triggers.forEach(st => st.kill());
        };
    }, [isMobile]);


    useEffect(() => {
        if (isMobile) return
        const container = boxScrollRef.current;
        const target = itemRefs.current[currentIndex];
        if (!container || !target) return;

        gsap.to(container, {
            scrollTop:
            target.offsetTop - container.clientHeight * 0.3,
            duration: 0.6,
            ease: "power3.out"
        });
    }, [currentIndex, isMobile]);


    useEffect(() => {
        if (isMobile) return
        
        const animations: gsap.core.Timeline[] = [];
        
        sectionsRef.current.forEach((anchor) => {
            if (!anchor) return;
            const video = anchor.querySelector(".project-video");
            if (!video) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: anchor,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            });
            
            tl.fromTo(
                video, 
                {opacity: 0, filter: "blur(24px)", scale: 0.9},
                {opacity: 1, filter: "blur(0px)", scale: 1, ease: "none", duration: 0.3}
            );
            tl.to(video, {opacity: 1,filter: "blur(0px)",scale: 1,ease: "none",duration: 0.4});
            tl.to(video, { opacity: 0, filter: "blur(24px)", scale: 0.94, ease: "none", duration: 0.3});
            
            animations.push(tl);
        });
        
        return () => {
            animations.forEach(tl => tl.kill());
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, [isMobile]);

  return (
    <div className='max-w-full min-h-dvh gap-0.5 relative p-0.5 flex text-text font-grotesk'>
        <div className="lg:sticky lg:top-0 lg:h-screen lg:self-start lg:min-w-md w-full lg:w-lg flex-shrink-0 max-w-full">
            <div ref={leftBoxRef} className="h-full">
                <Box absolute className="gap-8 left-0 sticky flex flex-col justify-start h-full lg:h-dvh items-start">
                    <div className="flex my-4 justify-center font-semibold items-center border-muted border-1 p-1.5 sm:p-3 px-5 rounded-full gap-2">
                        <span className="size-2 rounded-full bg-yellow"></span>
                        SELECTED PROJECTS
                    </div>

                    <div ref={boxScrollRef} className="flex flex-col w-full lg:overflow-scroll gap-6 pr-2 lg:pb-20">
                        {
                            projectDetails.map((project,index)=>{
                                const active = isMobile || index === currentIndex;
                                const isVisible = !isMobile || visibilityRef.current[index];
                                const mobileStyles = isMobile ? { opacity: isVisible ? 1 : 0.4, transform: isVisible ? "scale(1)" : "scale(0.9)", filter: isVisible ? "blur(0px)" : "blur(20px)" } : undefined

                                return(
                                    <div key={index} ref={(el: HTMLDivElement | null): void => { itemRefs.current[index] = el}} className="flex w-full flex-col gap-6 mb-4">
                                        <div className="flex flex-row items-center gap-2">
                                            <p className={`text-5xl ${active?"text-text":"text-muted"} text-nowrap font-offbit`}>{project.name}</p>
                                            <div className="w-full flex lg:hidden h-0 border-4 border-dotted"></div>
                                        </div>
                                        
                                        {active  && (
                                            <div style={mobileStyles} className="w-full justify-center items-center my-8 gap-8 flex flex-col transition-all duration-500 ease-out will-change-transform">
                                                
                                                {isMobile && (<a href={project.projectPath} target='_blank' className={`${project.isMobile?" max-h-[50dvh] min-h-96":"lg:h-9/12 max-w-full xs:max-w-2xl w-full"} object-contain flex justify-center`}>
                                                    <video src={project.video} autoPlay loop muted playsInline className={`object-contain project-video`} />
                                                </a>)}

                                                <div className="max-w-full xs:max-w-lg">
                                                    <ConsoleText projectname={project.name}>
                                                            <ProjectItem role = {project.role} skills = {project.skills} githubPath = {project.githubPath}projectPath = {project.projectPath} desc = {project.desc} />
                                                    </ConsoleText>
                                                </div> 
                                            </div>   
                                        )}
                                    </div>
                                )
                            })
                        }
                    </div>

                </Box>
            </div>
        </div>

        {!isMobile && (<div className="flex flex-col w-full h-full max-w-full">
            <div ref={entryRef}></div>
            <Box className="h-full w-full min-h-dvh max-w-full flex flex-col items-center">
                <div ref={letterPinRef} className="absolute inset-0 opacity-35 flex justify-center w-full items-center pointer-events-none z-0">
                    <p id="letter-div" className="text-[40vw] font-offbit font-bold text-card  [text-shadow:10px_5px_0px_#29282440] head-shadows text-lightgrey">
                        {projectDetails[currentIndex].letter}
                    </p>
                </div>
                
                <div className="flex flex-col">
                    {projectDetails.map((project,index)=>{
                        return(
                            <div key={index} className={`w-full min-h-dvh flex my-20 relative justify-center items-center`}>                
                                <a ref={(el)=>{sectionsRef.current[index] = el}} href={project.projectPath} target='_blank' className={`${project.isMobile?"h-[700px] max-h-[80dvh]":"lg:h-9/12 w-full lg:w-auto"} object-contain flex justify-center`}>
                                    <video src={project.video} autoPlay loop muted playsInline className={`object-contain project-video`} />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </Box>
            <div ref={exitRef}></div>
        </div>)}
        
    </div>
  )
}