// import _ from "lodash";

// function component() {
//     let element = document.createElement("div");
//     // Lodash, currently included via a script, is required for this line to work
//     element.innerHTML = _.join(["Hello", "webpack"], " ");
//     return element;
// }
// console.log(document);
// console.log(document.body);
// document.body.appendChild(component());

// function getComponent() {
//     const element = document.createElement("div");

//     return import("lodash")
//         .then(({ default: _ }) => {
//             const element = document.createElement("div");
//             element.innerHTML = _.join(["Hello", "webpack"], " ");

//             return element;
//         })
//         .catch((error) => "An error occurred while loading the component");
// }


async function getComponent(){
    const element = document.createElement('div')
    const {default:_ }=await import('lodash')

    element.innerHTML = _.join(['Hello','webpack'],' ')

    return element
}

getComponent().then((component) => {
    document.body.appendChild(component);
});
