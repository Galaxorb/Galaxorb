$(document).ready(function () {
    $("#sign-up").hide()
    $("#sign-up-hide").hide()

    $("#changesubtn").click(function () {
        $("#sign-in").hide()
        $("#sign-in-hide").hide()
        $("#sign-up").fadeIn()
        $("#sign-up-hide").fadeIn()
    })

    $("#changesibtn").click(function () {
        $("#sign-in").fadeIn()
        $("#sign-in-hide").fadeIn()
        $("#sign-up").hide()
        $("#sign-up-hide").hide()
    })
})