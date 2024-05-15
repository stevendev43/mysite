import { Link } from 'react-scroll';

const Works2 = () => {
    return (
        <>
            <div className="max-w-7xl mx-auto h-screen bg-[#9EB384]">
                <div className="pt-40 px-6 font-sans h-screen">
                    <ul>
                        <li className="text-slate-200 text-7xl hover:font-semibold leading-relaxed cursor-pointer hover:text-[#ff5555] my-1 py-1"><Link to="worksstreven" smooth={true} duration={500}>steven - branding</Link></li>
                        <li className="text-slate-200 text-7xl hover:font-semibold  leading-relaxed cursor-pointer hover:text-[#ff5555] my-1 py1"><Link to="worksnike" smooth={true} duration={500}>nike - app store figma</Link></li>
                        <li className="text-slate-200 text-7xl hover:font-semibold leading-relaxed cursor-pointer hover:text-[#ff5555] my-1 py-1"><Link to="workswsl" smooth={true} duration={500}>wsl - app figma</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Works2;