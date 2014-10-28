function replaceContentInContainer(matchClass) {
    var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ') > -1) {
        	org_html = elems[i].parentNode.innerHTML;
			new_html = "<span>" + org_html + "</span>";
            elems[i].parentNode.innerHTML = new_html.replace("spanify", "spanned");
        }
    }
}

replaceContentInContainer('spanify');