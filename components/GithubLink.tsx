import Image from 'next/image';
import GithubLogo from '../public/assets/github.svg';
export function GithubLink() {
  const handleClick = () => {
    window?.open('https://github.com/shihui-huang/call-bob', '_blank')?.focus();
  };
  return (
    <div className="mx-1">
      <button className="flex items-center" onClick={handleClick}>
        <Image src="public/assets/shaikhaniLogo.png" className="w-5 h-5"  alt="shaikhani logo" />
        <div className="xxs:hidden md:block ml-2">Shaikhani</div>
      </button>
    </div>
  );
}
