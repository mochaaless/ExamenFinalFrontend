import Logout from "./Logout.tsx"

const Header = () => {
    return(
        <header class="header-container">
          <div class="header-content">
            <span class="user-name">testing1</span>
            <Logout/> 
          </div>
        </header>
    )
}

export default Header;