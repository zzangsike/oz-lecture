async function getPost(postNum) {
  try {
    let response = await fetch(
      `https://jsonplaceholderfdfdfdfdfdf.typicode.com/posts/${postNum}`
    );
    if (response.ok) throw new Error(response.error);

    console.log(response.ok);
    // let data = await response.json();
    // console.log(data);
  } catch (error) {
    console.log(error);
    alert("에러: " + error.message);
  }
}
getPost("fdfd");
