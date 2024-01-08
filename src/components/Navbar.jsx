export default function Nav({ links }) {
    return (
        <nav className="nav">
            <ul className="nav--list">
                {links.map((link) => link)}
            </ul>
        </nav>
    )
}