import { useEffect, useRef, useState } from "react";
import Box from "../../Components/Box";
import { educationList } from "../../data/data";
import Card from "./Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GithubGraph from "./Github/GithubGraph";
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
            visibilityRef.current = visibilityRef.current.map(() => true);
            forceRender(v => v + 1);
        };

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [isMobile]);

    useEffect(() => {
        const media = window.matchMedia("(max-width: 1023px)");

        const handler = () => setIsMobile(media.matches);
        media.addEventListener("change", handler);

        return () => media.removeEventListener("change", handler);
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
            onRefresh: (self) => self.pin && gsap.set(self.pin, {clearProps: "all"})
        })

        return ()=>st.kill()
    },[])

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
        });

        return () => st.kill()
    }, []);

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
                onEnterBack: () => setCurrentIndex(index)
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
    }, [currentIndex]);


    useEffect(() => {
        if (isMobile) return
        sectionsRef.current.forEach((anchor) => {
            if (!anchor) return;
            const video = anchor.querySelector(".project-video");
            if (!video) return;

            const tl = gsap.timeline({
            scrollTrigger: {
                trigger: anchor,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
            });
            tl.fromTo(
                video, {opacity: 0, filter: "blur(24px)", scale: 0.9},
                {opacity: 1, filter: "blur(0px)", scale: 1, ease: "none", duration: 0.3}
            );
            tl.to(video, {opacity: 1,filter: "blur(0px)",scale: 1,ease: "none",duration: 0.4});
            tl.to(video, { opacity: 0, filter: "blur(24px)", scale: 0.94, ease: "none", duration: 0.3});
        });
        
        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

  return (
    <div className='max-w-full min-h-dvh gap-0.5 relative p-0.5 flex text-text font-grotesk'>

        <div className="lg:sticky lg:top-0 lg:h-screen lg:self-start lg:min-w-md w-full lg:w-lg flex-shrink-0 max-w-full">
            <div ref={leftBoxRef} className="h-full">
                <Box className=' xl:min-w-md flex-col h-full w-full xl:w-lg flex justify-start items-start flex-shrink-0 max-w-full'>
                     <div className="flex justify-center font-semibold items-center  p-1.5 sm:p-3 px-5 border-muted border-1 rounded-full gap-2">
                         <span className="size-2 rounded-full bg-blurple"></span>
                         EXPERIENCE
                     </div>
                     <div>
                        <GithubGraph />
                     </div>
                     
                 </Box>
            </div>
        </div>

        <div className="flex flex-col w-full max-w-full">
            <div ref={entryRef}></div>
            <Box className="h-full w-full min-h-dvh max-w-full flex flex-col items-center">
                
                <div className="flex py-10 flex-row items-center justify-between gap-4 ">
                    <div className="flex flex-col w-full h-full items-start sm:items-end gap-10  sm:order-1 order-2">
                        {educationList.map((item,index)=>{
                        const isOdd = index%2===1
                        return(
                                <div key={index} className="sm:min-h-96 min-h-80 justify-around items-center flex flex-1 ">
                                <div className={`${isOdd?"block sm:hidden":"hidden sm:block"}`}>
                                    <Card projectname={item.Place} timeline={item.timeline} skills = {item.skill} desc={item.desc}/> 
                                </div>
                            </div>
                        )
                    })}
                    </div>

                    <div className=" bg-muted w-1 h-full relative sm:order-2 order-1">
                    </div> 

                    <div  className="sm:flex flex-col w-full h-full items-start hidden gap-10 sm:order-3 ">
                        {educationList.map((item,index)=>{
                            const isEven = index%2==0
                            return(
                                <div className="sm:min-h-96 min-h-80 relative justify-around items-center flex flex-1 ">
                                    <div className={`${isEven?"block sm:hidden":"hidden sm:block"}`}>
                                        <Card projectname={item.Place} timeline={item.timeline} skills = {item.skill} desc={item.desc}/> 
                                    </div>

                                    <div className="w-4 h-4 border-[1px] bg-darkgrey border-muted rounded-full hover:bg-myteal absolute top-1/2 -left-[25px]">
                                        <div className={`absolute ${!isEven?"-left-12 -top-1.5":"sm:left-6 sm:-top-1.5 -left-12 -top-1.5"}`}>{item.start}</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Box>
            <div ref={exitRef}></div>
        </div>
        
    </div>
  )
}

                        