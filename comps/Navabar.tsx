import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
               <Image src="/logo.png" width={100} height={70} alt={""}/>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/list">MyList</Link>
        
        </nav>
     );
}
 
export default Navbar;