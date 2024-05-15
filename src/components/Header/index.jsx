import logo from '../logo/logo.svg';




export default function Header() {
    return (
        <>
            <div className="h-24 max-w-7xl bg-slate-300 flex justify-between items-center mx-auto">
                <div className='text-[40px] pl-6'>
                    <i class="ri-menu-5-line"></i>
                </div>
                <div className='w-60'>
                    <img  src={logo} className='' alt='Logotipo' />
                </div>                     
            </div>
        </>
    )
}