function replaceContentInContainer(matchClass) {
    var elems = document.getElementsByTagName('*'), i;
    for (i in elems) {
        if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ') > -1) {
        	org_html = elems[i].innerHTML;
			new_html = "<span>" + org_html + "</span>";
            elems[i].innerHTML = new_html;
        }
    }
}

replaceContentInContainer('spanify');