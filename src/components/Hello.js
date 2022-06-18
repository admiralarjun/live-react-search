import './Hello.css';


function Hello(props) {
    return (
      <div className="f1 tc hello-message">
        {/* f1 tc is tychon class for font1 text center */}
        <h1>Hello all!</h1>
        <p>{props.greeting}</p>
        <strong>{props.str}</strong>
      </div>
    );
  }

function Hi() {
    return (
        <div>
            <h1>
                yep!
            </h1>
        </div>
    )
}  


  
//   export default Hello;
//   export  hi;

// multiple exports os also possible
// but can have only one default export.

export {
    Hello,
    Hi,
}