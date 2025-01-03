import{
    FaFacebook,
    FaLinkedin,
    FaYoutube,
} from "react-icons/fa"
import Link from "next/link";

export default function SocialMedia(){
    return(
 
    // Social Icons

    <nav className="flex gap-5">
    <Link href={"http://https://www.youtube.com/@Em-Aar?sub_confirmation=1"} target="_blank">
    <FaYoutube className={`w-6 h-6`}/>
    </Link>
    <Link href={"http://www.linkedin.com"} target="_blank">
    <FaLinkedin className={`w-6 h-6`}/>
    </Link>
    <Link href={"http://www.facebook.com"} target="_blank">
    <FaFacebook className={`w-6 h-6`}/>
    </Link>
    </nav>
    );

};