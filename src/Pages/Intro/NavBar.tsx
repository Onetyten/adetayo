

const localLinks = [
    {name:"Work",url:""},
    {name:"About",url:""},
    {name:"Contact",url:""},
]

export default function NavBar() {
    
  return (
    <div className="gap-2 h-full flex justify-between items-center w-full">
        <p className="text-xl font-poppins font-semibold">Adetayo</p>
        <div className="flex gap-3 uppercase font-medium font-grotesk text-sm">
            {localLinks.map((item,index) => <a key={index} href={item.url}>{item.name}</a>)}
        </div>
    </div>
  )
}
