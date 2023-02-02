$((function () { "use strict"; var t = $("#basic-alert"), n = $("#with-title"), o = $("#footer-alert"), i = $("#html-alert"), e = $("#position-top-start"), s = $("#position-top-end"), a = $("#position-bottom-start"), l = $("#position-bottom-end"), c = $("#bounce-in-animation"), r = $("#fade-in-animation"), u = $("#flip-x-animation"), m = $("#tada-animation"), f = $("#shake-animation"), b = $("#type-success"), h = $("#type-error"), g = $("#type-warning"), p = $("#type-info"), w = $("#custom-image"), d = $("#auto-close"), S = $("#outside-click"), y = $("#prompt-function"), B = $("#ajax-request"), C = $("#confirm-text"), k = $("#confirm-color"), x = "../../../app-assets/"; "laravel" === $("body").attr("data-framework") && (x = $("body").attr("data-asset-path")), t.length && t.on("click", (function () { Swal.fire({ title: "Any fool can use a computer", customClass: { confirmButton: "btn btn-primary" }, buttonsStyling: !1 }) })), n.length && n.on("click", (function () { Swal.fire({ title: "The Internet?,", text: "That thing is still around?", customClass: { confirmButton: "btn btn-primary" }, buttonsStyling: !1 }) })), o.length && o.on("click", (function () { Swal.fire({ icon: "error", title: "Oops...", text: "Something went wrong!", footer: "<a href>Why do I have this issue?</a>", customClass: { confirmButton: "btn btn-primary" }, buttonsStyling: !1 }) })), i.length && i.on("click", (function () { Swal.fire({ title: "<strong>HTML <u>example</u></strong>", icon: "info", html: 'You can use <b>bold text</b>, <a href="https://pixinvent.com/" target="_blank">links</a> and other HTML tags', showCloseButton: !0, showCancelButton: !0, focusConfirm: !1, confirmButtonText: feather.icons["thumbs-up"].toSvg({ class: "font-medium-1 me-50" }) + "Great!", confirmButtonAriaLabel: "Thumbs up, great!", cancelButtonText: feather.icons["thumbs-down"].toSvg({ class: "font-medium-1" }), cancelButtonAriaLabel: "Thumbs down", customClass: { confirmButton: "btn btn-primary", cancelButton: "btn btn-outline-danger ms-1" }, buttonsStyling: !1 }) })), e.length && e.on("click", (function () { Swal.fire({ position: "top-start", icon: "success", title: "Your work has been saved", showConfirmButton: !1, timer: 1500, customClass: { confirmButton: "btn btn-primary" }, buttonsStyling: !1 }) })), s.length && s.on("click", (function () { Swal.fire({ position: "top-end", icon: "success", title: "Your work has been saved", showConfirmButton: !1, timer: 1500, customClass: { confirmButton: "btn btn-primary" }, buttonsStyling: !1 }) })), a.length && a.on("click", (function () { Swal.fire({ position: "bottom-start", icon: "success", title: "Your work has been saved", showConfirmButton: !1, timer: 1500, customClass: { confirmButton: "btn btn-primary" }, buttonsStyling: !1 }) })), l.length && l.on("click", (function () { Swal.fire({ position: "bottom-end", icon: "success", title: "Your work has been saved", showConfirmButton: !1, timer: 1500, customClass: { confirmButton: "btn btn-primary" }, buttonsStyling: !1 }) })), c.length && c.on("click", (function () { Swal.fire({ title: "Bounce In Animation", customClass: { confirmButton: "btn btn-primary" }, showClass: { popup: "animate__animated animate__bounceIn" }, buttonsStyling: !1 }) })), r.length && r.on("click", (function () { Swal.fire({ title: "Fade In Animation", customClass: { confirmButton: "btn btn-primary" }, showClass: { popup: "animate__animated animate__fadeIn" }, buttonsStyling: !1 }) })), u.length && u.on("click", (function () { Swal.fire({ title: "Flip In Animation", customClass: { confirmButton: "btn btn-primary" }, showClass: { popup: "animate__animated animate__flipInX" }, buttonsStyling: !1 }) })), m.length && m.on("click", (function () { Swal.fire({ title: "Tada Animation", customClass: { confirmButton: "btn btn-primary" }, showClass: { popup: "animate__animated animate__tada" }, buttonsStyling: !1 }) })), f.length && f.on("click", (function () { Swal.fire({ title: "Shake Animation", customClass: { confirmButton: "btn btn-primary" }, showClass: { popup: "animate__animated animate__shakeX" }, buttonsStyling: !1 }) })), b.length && b.on("click", (function () { Swal.fire({ title: "Good job!", text: "You clicked the button!", icon: "success", customClass: { confirmButton: "btn btn-primary" }, buttonsStyling: !1 }) })), h.length && h.on("click", (function () { Swal.fire({ title: "Error!", text: " You clicked the button!", icon: "error", customClass: { confirmButton: "btn btn-primary" }, buttonsStyling: !1 }) })), g.length && g.on("click", (function () { Swal.fire({ title: "Warning!", text: " You clicked the button!", icon: "warning", customClass: { confirmButton: "btn btn-primary" }, buttonsStyling: !1 }) })), p.length && p.on("click", (function () { Swal.fire({ title: "Info!", text: "You clicked the button!", icon: "info", customClass: { confirmButton: "btn btn-primary" }, buttonsStyling: !1 }) })), w.length && w.on("click", (function () { Swal.fire({ title: "Sweet!", text: "Modal with a custom image.", imageUrl: x + "images/slider/04.jpg", imageWidth: 400, imageHeight: 200, imageAlt: "Custom image", customClass: { confirmButton: "btn btn-primary" }, buttonsStyling: !1 }) })), d.length && d.on("click", (function () { var t; Swal.fire({ title: "Auto close alert!", html: "I will close in <b></b> milliseconds.", timer: 2e3, timerProgressBar: !0, didOpen: () => { Swal.showLoading(), t = setInterval((() => { const t = Swal.getHtmlContainer(); if (t) { const n = t.querySelector("b"); n && (n.textContent = Swal.getTimerLeft()) } }), 100) }, willClose: () => { clearInterval(t) } }).then((t => { t.dismiss === Swal.DismissReason.timer && console.log("I was closed by the timer") })) })), S.length && S.on("click", (function () { Swal.fire({ title: "Click outside to close!", text: "This is a cool message!", customClass: { confirmButton: "btn btn-primary" }, buttonsStyling: !1 }) })), y.length && y.on("click", (function () { const t = ["1", "2", "3"], n = Swal.mixin({ confirmButtonText: "Forward", cancelButtonText: "Back", progressSteps: t, input: "text", inputAttributes: { required: !0 }, validationMessage: "This field is required" }); !async function () { const o = []; let i; for (i = 0; i < t.length;) { const e = await new n({ title: "Question " + t[i], showCancelButton: i > 0, currentProgressStep: i }); e.value ? (o[i] = e.value, i++) : "cancel" === e.dismiss && i-- } Swal.fire(JSON.stringify(o)) }() })), B.length && B.on("click", (function () { Swal.fire({ title: "Search for a GitHub user", input: "text", customClass: { confirmButton: "btn btn-primary", cancelButton: "btn btn-outline-danger ms-1" }, buttonsStyling: !1, inputAttributes: { autocapitalize: "off" }, showCancelButton: !0, confirmButtonText: "Look up", showLoaderOnConfirm: !0, preConfirm: t => fetch(`//api.github.com/users/${t}`).then((t => { if (!t.ok) throw new Error(t.statusText); return t.json() })).catch((t => { Swal.showValidationMessage(`Request failed: ${t}`) })) }).then((t => { t.isConfirmed && Swal.fire({ title: t.value.login + "'s avatar", imageUrl: t.value.avatar_url, customClass: { confirmButton: "btn btn-primary" } }) })) })), C.length && C.on("click", (function () { Swal.fire({ title: "Are you sure?", text: "You won't be able to revert this!", icon: "warning", showCancelButton: !0, confirmButtonText: "Yes, delete it!", customClass: { confirmButton: "btn btn-primary", cancelButton: "btn btn-outline-danger ms-1" }, buttonsStyling: !1 }).then((function (t) { t.value && Swal.fire({ icon: "success", title: "Deleted!", text: "Your file has been deleted.", customClass: { confirmButton: "btn btn-success" } }) })) })), k.length && k.on("click", (function () { Swal.fire({ title: "Are you sure?", text: "You won't be able to revert this!", icon: "warning", showCancelButton: !0, confirmButtonText: "Yes, delete it!", customClass: { confirmButton: "btn btn-primary", cancelButton: "btn btn-outline-danger ms-1" }, buttonsStyling: !1 }).then((function (t) { t.value ? Swal.fire({ icon: "success", title: "Deleted!", text: "Your file has been deleted.", customClass: { confirmButton: "btn btn-success" } }) : t.dismiss === Swal.DismissReason.cancel && Swal.fire({ title: "Cancelled", text: "Your imaginary file is safe :)", icon: "error", customClass: { confirmButton: "btn btn-success" } }) })) })) }));
