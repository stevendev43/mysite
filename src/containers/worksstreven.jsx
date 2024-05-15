import logo from '../components/logo/logo.svg';
import brand1 from '../components/brand/brand.svg';
import brand2r from '../components/brand/brand2r.svg'
import brand3r from '../components/brand/brand3r.svg'
import brand4r from '../components/brand/brand4r.svg'
import brand5r from '../components/brand/brand5r.svg'
import brand6r from '../components/brand/brand6r.svg'



const Workssteven = () => {
    return (
        <>
            <div name="worksstreven" className="max-w-7xl mx-auto h-full bg-[#8785A2]">
                <img src= {logo} className='flex pt-12 pb-9' alt="Logotipo" />
                <img src= {brand1} className='w-[900px] flex mx-auto pb-8' alt='Branding 1' />
                <img src= { brand2r } className='w-[900px] flex mx-auto pb-8' />
                <img src= { brand3r } className='w-[900px] flex mx-auto pb-8' />
                <img src= { brand4r } className='w-[900px] flex mx-auto pb-8' />
                <img src= { brand5r } className='w-[900px] flex mx-auto pb-8' />
                <img src= { brand6r } className='w-[900px] flex mx-auto pb-8' />
            </div>
        </>
    );
};

export default Workssteven;