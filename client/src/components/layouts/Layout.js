import Navigation from "../Navigation";

function Layout({children}) {
    return (
        <div>
            <Navigation/>
            {children}
            <h1>Footer</h1>
        </div>
    );
}

export default Layout;