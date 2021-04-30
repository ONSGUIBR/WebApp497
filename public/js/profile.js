$(document).on('click', '#cancel-btn', function (){
    const some_user = $(this).parents(".container").find("#user-id").text();
    alert(some_user);

    // $.delete("/profile", {
    //     id: '6088bf93815ca63a648bdfe2'
    // });
})
