export function mainError() {
  let test = { prop: null };

  try {
    console.log(this.test.prop.toLowercase());
    return false;
  }catch(e) { return true;}
}