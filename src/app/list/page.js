export default function Page() {
    return (
      <>
        <h1>List page</h1>
        <section>
          {
            [...new Array(8)].map((item, index) => (
              <div key={index}>
                <a href="/flight"><div>this is a listing</div></a>
                <p>these are the details</p>
              </div>
            ))
          }
        </section>
      </>
    );
  }