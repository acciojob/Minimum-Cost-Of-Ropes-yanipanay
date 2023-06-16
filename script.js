function calculateMinCost() {
  //your code here

	let text = document.getElementById("rope-lengths");

	let arr=text.split(",");
      for(let i in arr){
        arr[i]=Number(arr[i]);
      }
  
  
      let sum=0;
  
      function set(arr) {
        //console.log(arr);
        arr.sort((a, b) => b - a);
        let s = arr.pop() + arr.pop();
        //console.log(s,arr);
        sum += s;
        arr.push(s);
      }
  
      while (arr.length>1) {
          set(arr);
      }

	let res = document.getElementById("result");
      console.log(res);
      const textNode = document.createTextNode(sum);
    res.appendChild(textNode);
}  
