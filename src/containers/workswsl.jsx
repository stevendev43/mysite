import logo from '../components/logo/logo.svg';
import wsl1 from '../components/wsl/wsl1.svg';
import wsl2 from '../components/wsl/wsl2.svg';
import wsl3 from '../components/wsl/wsl3.svg';
import wsl4 from '../components/wsl/wsl4.svg';




const Workswsl = () => {
    return (
        <>
            <div name="workswsl" className="max-w-7xl mx-auto h-full bg-[#9EB384]">
                <img src= {logo} className='flex pt-12 pb-9' alt="Logotipo" />
                <img src= {wsl1} className='w-[900px] flex mx-auto pb-9' alt='Wsl app' />
                <img src= { wsl2 } className='w-[900px] flex mx-auto pb-9' alt='Wsl app' />
                <img src= { wsl3 } className='w-[900px] flex mx-auto pb-9' alt='Wsl app' />
                <img src= { wsl4 } className='w-[900px] flex mx-auto pb-9' alt='Wsl app' />
            </div>
        </>
    );
};

export default Workswsl;