/* Iteration 4: Make the Everything Work */
constfrozenbackground = document.getElementById("frozenbackground");
frozenbackground.oninput = () => {
  background.style.fill = frozenbackground.value;
};
constfrozenbody = document.getElementById("frozenbody");
frozenbody.oninput = () => {
  body.style.fill = frozenbody.value;
};
constfrozendress = document.getElementById("frozendress");
frozendress.oninput = () => {
  dress.style.fill = frozendress.value;
};
constfrozenface = document.getElementById("frozenface");
frozenface.oninput = () => {
  face.style.fill = frozenface.value;
};
constfrozenhair = document.getElementById("frozenhair");
frozenhair.oninput = () => {
  hair.style.fill = frozenhair.value;
};
