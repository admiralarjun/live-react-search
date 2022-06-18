
function Card({name,username,mail}) {

    return(
        // <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
        //     <img src={`https://robohash.org/${name}?200x200`} alt='Image'></img>
        //     <div className='tc'>
        //         <h3>{name}</h3>
        //         <h3>@{username}</h3>
        //         <h3>{mail}</h3>
        //     </div>
        // </div>

    <div>
        <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
        <div className="dtc w2 w3-ns v-mid">
            <img src={`https://robohash.org/${name}?200x200`} className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"/>
        </div>
        <div className="dtc v-mid pl3">
            <h1 className="f6 f5-ns fw6 lh-title black mv0">{name}</h1>
            <h2 className="f5 fw6 db blue link dim">@{username}</h2>
            <h3 className="f6 fw4 mt0 mb0 black-60">{mail}</h3>
        </div>
        <div className="dtc v-mid">
            <form className="w-100 tr">
            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ Follow</button>
            </form>
        </div>
        </article>
    </div>
    );
}

export default Card;