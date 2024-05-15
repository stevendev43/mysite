import imgabout from '../components/imgabout/fotoperfil.png';

const Home = () => {
  const top = () => {
    window.scrollTo(0,0);
  };

    return (
    <>
        <div name="about" className='max-w-7xl mx-auto h-screen flex bg-[#ff5555]'>
          <div className="flex relative w-[30%] h-screen">
            <img src={imgabout} className='opacity-80 object-cover' alt="Imagen de perfil" />
            <div className='absolute w-full flex text-right mt-12'>
              <h3 className='text-[#272727] text-9xl leading-relaxed  font-semibold font-sans'>Good <br />to <br /> see <br /> you</h3>
            </div>
          </div>
          <div className='w-[70%] h-screen flex items-center justify-center text-center'>
            <h3 className='font-thin text-[#272727] pt-4 text-8xl'>It`s steven, web & mobile developer and graphic designer based in Argentina with  a passion for design and a  technology.</h3>
          </div>
          <div className='flex justify-items-end'>
            <button onClick={top}>Top</button>
          </div>
        </div>
    </>    
    );
};


export default Home;