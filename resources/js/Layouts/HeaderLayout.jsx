import {Link} from "@inertiajs/react";
import {usePage} from "@inertiajs/react";
import {Inertia} from "@inertiajs/inertia";


export default function HeaderLayout(){

    const user = usePage().props.auth.user;

    const handleLogout=()=>{
        Inertia.post(route("logout"));
    }
    console.log(user);


    return (
        <>
            <header className="bg-header text-white
    sm:flex flex-row justify-around items-center h-15v">
                <img className="p-4 h-full" src="images/logo.png" alt="logo"/>
                <h1 className="text-4xl">Proyecto de laravel</h1>
                {user && (
                    <div>
                        {user.name}
                        <button onClick={handleLogout} className="btn glass text-white">Logout</button>
                    </div>
                )}
                {!user && (
                <div>
                    <Link href={route('login')} className="btn glass text-white">Acceder</Link>
                    <Link href={route('register')} className="btn glass text-white">Registrarme</Link>
                </div>
                    )}
            </header>
        </>
    );

}
