



const Contact = () => {
    return (
    <>
        <div name="contact" className='max-w-7xl mx-auto flex h-screen bg-[#272727]'>
            <div className="w-[66%] h-screen bg-slate-300 flex justify-center items-center">
                <form action="" className="flex flex-col w-56">
                    <label className="relative">
                        <input type="text" className="h-14 w-96 px-6 text-xl bg-slate-300 border rounded-lg border-[#272727] border-opacity-50 outline-none focus:border-[#ff5555] focus:text-[#272727] transition duration-200 mb-6" />
                        <span className="text-lg text-[#272727] text-opacity-80 absolute left-0 top-2 mx-4 transition duration-200 input-text ">your name</span>
                    </label>
                    <label className="relative">
                        <input type="text" className="h-14 w-96 px-6 text-lg bg-slate-300 border rounded-lg border-[#272727] border-opacity-50 outline-none focus:border-[#ff5555] focus:text-[#272727] transition duration-200 mb-6" />
                        <span className="text-lg text-[#272727] text-opacity-80 absolute left-0 top-2 mx-4 transition duration-200 input-text">your email</span>
                    </label>
                    <label className="relative">
                        <input type="text" className="h-14 w-96 px-6 text-lg bg-slate-300 border rounded-lg border-[#272727] border-opacity-50 outline-none focus:border-[#ff5555] focus:text-[#272727] transition duration-200 mb-6" />
                        <span className="text-lg text-[#272727] text-opacity-80 absolute left-0 top-2 mx-4 transition duration-200 input-text">your message</span>
                    </label>
                    <div className='flex justify-end'>
                        <button className="bg-transparent hover:bg-slate-300 text-[#272727] font-semibold hover:text-[#ff5555] py-2 px-6 border border-[#272727] hover:border-[#ff5555] text-xl border-opacity-50 rounded text-opacity-80">
                        Enviar
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-auto h-screen flex items-center">
                <h1 className="text-slate-300 text-9xl font-bold text-center">Con<br />tact</h1>
            </div>
        </div>
    </>    
    );
};


export default Contact;