export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">
            Online Judge HackRush
        </a> 
        <ul>
            <li>
                <a href="/question">Question</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
}
