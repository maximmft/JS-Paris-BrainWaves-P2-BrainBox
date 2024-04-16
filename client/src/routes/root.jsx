export default function Root() {
     return (
          <>
            <div id="slider">
              <h1>React Router Contacts</h1>
              <div>
                  <form id="search-form" role="search">
                    <input 
                       id="q"
                       aria-label="Search category"
                       placeholder="Search"
                       type="search"
                       name="q"
                       />
                    <div 
                        id="search-spinner"
                        aria-hidden
                        hidden={true}
                        />
                    <div
                        className="sr-only"
                        aria-live="polite"
                    ></div>
                    </form>
                    <form method="post">
                        <button type="submit">Search</button>
                    </form>
                    </div>
                    <nav>
                         <ul>
                         <li>
                             <a href={`/history/1`}>History</a>
                         </li>
                         <li>
                              <a href={`/geography/2`}>Geography</a>
                         </li>
                              </ul>
                    </nav>
                    </div>
                    <div id="detail"></div>
                    </>
  );
}