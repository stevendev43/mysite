import logo from '../components/logo/logo.svg';
import nike1 from '../components/nike/nike1.svg';
import nike2 from '../components/nike/nike2.svg';




const Worksnike = () => {
    return (
        <>
            <div name="worksnike" className="max-w-7xl mx-auto h-full bg-[#EF9595]">
                <img src= {logo} className='flex pt-12 pb-9' alt="Logotipo" />
                <img src= {nike1} className='w-[900px] flex mx-auto pb-9' alt='Branding 1' />
                <img src= {nike2} className='w-[900px] flex mx-auto pb-8' alt='Branding 1' />
            </div>
        </>
    );
};

export default Worksnike;