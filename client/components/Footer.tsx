import Link from "next/link"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'


const Footer: React.FC = () => {

  return (
    <footer className="w-screen h-14 bg-black border border-white fixed bottom-0 flex row items-center justify-center gap-3">
        <Link href="https://github.com/franciscoG98" rel="noopener noreferrer" target="_blank">
            <span className="text-white hover:text-gray-400 duration-200">
                <AiFillGithub size={30}/>
            </span>

        </Link>
        <Link href="https://www.linkedin.com/in/francisco-gonzalez-web-dev/" rel="noopener noreferrer" target="_blank">
            <span className="text-white hover:text-gray-400 duration-200">
                <AiFillLinkedin size={30} />
            </span>
        </Link>
    </footer>
  );
};

export default Footer;
