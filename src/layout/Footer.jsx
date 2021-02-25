export default function Footer(){
    return(
        <footer className="page-footer green lighten-1">
          <div className="footer-copyright transparent">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/Agdgom?tab=repositories" rel="noreferrer" target="_blank">Repositories</a>
            </div>
          </div>
        </footer>
    )
} 