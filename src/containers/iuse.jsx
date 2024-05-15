

const Iuse = ()  => {
    return (
        <>  
            <div className="max-w-7xl mx-auto h-screen bg-slate-300 flex relative">
                <div className="w-1/3">
                    <h2 className="text-9xl pl-6 text-[#272727]">I use...</h2>
                </div>  
                <div className="w-2/3 h-screen bg-[#272727] flex">
                    <div className="h-screen w-1/2 text-slate-200 flex items-center">
                        <p className="text-2xl pl-4">/html <br />/css <br />/javascript <br />/react js <br />/tailwind</p>
                    </div>
                    <div className="-screen w-2/2">
                        <div className="pt-40">
                            <p className="text-2xl pl-4 text-slate-200">/react native <br />/expo </p>
                        </div>
                        <div className="pt-96">
                            <p className="text-2xl pl-4 text-slate-200">/gimp <br />/inkscape <br />/photopea <br />/figma <br /> /notion</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Iuse;