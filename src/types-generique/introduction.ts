const tabstring: string[] = ["Bonjour", "les", "amis"];

const arrString: Array<string> = ["Bonjour", "les", "amis"];

const promise: Promise<string> = new Promise((resolve, reject) => {
  resolve("Bonjour les amis");
});

promise.then((value) => {
  console.log(value);
});

const user: {} = { name: "Oumar", laste: "Traore" };

const newpromise: Promise<{ name: string; laste: string }> = new Promise(
  (resolve, reject) => {
    resolve({ name: "Jean", laste: "Lamotte" });
  }
);

newpromise.then((user) => {
  let fullname = user.name + " " + user.laste;
  console.log(fullname);
});
