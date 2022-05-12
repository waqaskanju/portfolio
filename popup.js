
        const overlay_cotent = document.getElementById("overlay-content-popup");
        const section = document.createElement("section");
        section.classList.add("work");
        section.setAttribute('id', "portfolio_popup");

        /*Create DIV 1  */

        const popup_header = document.createElement("div");
        popup_header.classList.add("popup-header");
        section.appendChild(popup_header);

        /* inside popup_header add h3 and a */
        const h3_title = document.createElement("h3");
        popup_header.appendChild(h3_title);
        h3_title.classList.add("project__name");
        h3_title.setAttribute("id","popup_title");

        const popup_close_button = document.createElement("a");
        popup_close_button.setAttribute("href","javascript:void(0)");
        popup_close_button.setAttribute("href","javascript:void(0)");
        popup_close_button.setAttribute("onclick","close_popup()");
        popup_close_button.innerHTML="&times;";
        popup_header.appendChild(popup_close_button);

        /* add span to section */
        const project_role_container=document.createElement("span");
        project_role_container.classList.add("project__role__container");
        section.appendChild(project_role_container);
         /* add b to section */
        const popup_sub_title = document.createElement("b");
        popup_sub_title.classList.add("project__conopy_popup");
        popup_sub_title.setAttribute("id","popup_sub_title");
        section.appendChild(popup_sub_title);
          /* add ul to section */
        const languages =document.createElement("ul");
        languages.classList.add("project__role");
        languages.classList.add("hug_content");
        /* Add 2 li to ul */
        const role= document.createElement("li");
        role.setAttribute("id","popup_role");
        languages.appendChild(role);
        const year= document.createElement("li");
        year.setAttribute("id","popup_year");
        languages.appendChild(year);
        section.appendChild(languages);
        /* Add picture div */
        const picture_container =document.createElement("div");
        picture_container.classList.add("work_picture--container");
        const picture=document.createElement("picture");
        picture_container.appendChild(picture);
        const source= document.createElement("source");
        source.setAttribute("srcset","./style/pictures/desktop/Tonic.png");
        source.setAttribute("media","(min-width: 785px)")
        const img=document.createElement("img");
        img.setAttribute("src","./style/pictures/handheld/Tonic.png");
        img.setAttribute("id","popup_image");
        img.setAttribute("alt","Tonic");
        picture.appendChild(source);
        picture.appendChild(img);
        section.appendChild(picture_container);

        /* Work Content */
        const work_content=document.createElement("div");
        work_content.classList.add("work__content");
        section.appendChild(work_content);
        
        const description=document.createElement("p");
        description.classList.add("project__description");
        description.setAttribute("id","popup_description");
        work_content.appendChild(description);

        const project_l= document.createElement("div");
        work_content.appendChild(project_l);
        
        const top_languages= document.createElement("ul");
        top_languages.classList.add("project__languages");

        const html =document.createElement("li");
        html.classList.add("languages");	
	

        const css =document.createElement("li");
        css.classList.add("languages");
        const javascript =document.createElement("li");
        javascript.classList.add("languages");
	
        top_languages.appendChild(html);
        top_languages.appendChild(css);
        top_languages.appendChild(javascript);
        project_l.appendChild(top_languages);

        const link_html = document.createElement("a");
        link_html.href = "#";
        const link_css = document.createElement("a");
        link_css.href = "#";
        const link_javascript = document.createElement("a");
        link_javascript.href = "#";

        link_html.setAttribute("id", "html");
        link_css.setAttribute("id", "css");
        link_javascript.setAttribute("id", "javascript");
  

    	html.appendChild(link_html);
        css.appendChild(link_css);
    	javascript.appendChild(link_javascript);

        const bottom_languages= document.createElement("ul");
        bottom_languages.classList.add("project__languages", "m-t-1");
        const github =document.createElement("li");
        github.classList.add("languages");
        github.classList.add("popup_extra_languages");
        const ruby =document.createElement("li");
        ruby.classList.add("languages");
        ruby.classList.add("popup_extra_languages");
        const bootstraps =document.createElement("li");
        bootstraps.classList.add("languages");
        bootstraps.classList.add("popup_extra_languages");

        bottom_languages.appendChild(github);
        bottom_languages.appendChild(ruby);
        bottom_languages.appendChild(bootstraps);

        const link_github = document.createElement("a");
        link_github.href = "#";
        const link_ruby = document.createElement("a");
        link_ruby.href = "#";
        const link_bootstraps = document.createElement("a");
        link_bootstraps.href = "#";

        github.appendChild(link_github);
        ruby.appendChild(link_ruby);
        bootstraps.appendChild(link_bootstraps);

        link_github.setAttribute("id", "github");
        link_ruby.setAttribute("id", "ruby");
        link_bootstraps.setAttribute("id", "bootstraps");

        project_l.appendChild(bottom_languages);
	 


	const m_t_1 = document.createElement("div");
        	m_t_1.classList.add("m_t_1");
        project_l.appendChild(m_t_1);

        const see_live = document.createElement("a");
        see_live.href = "javascript:void(0)"
        see_live.classList.add("project__link")
        see_live.setAttribute("onclick", "open_popup()");

        const fa_circle = document.createElement("i");
        fa_circle.classList.add("fa", "fa-circle-o-notch")

        
        m_t_1.appendChild(see_live);

        const see_source = document.createElement("a");
        m_t_1.appendChild(see_source);
	    see_source.href = "javascript:void(0)"
        see_source.classList.add("project__link")
        see_source.setAttribute("onclick", "open_popup()");
        const fa_brands = document.createElement("i");
        fa_brands.classList.add("fa-brands", "fa-github")
        see_live.innerHTML = "See Live";
        see_source.innerHTML = "See Source";
        see_live.setAttribute("id", "live_link")
        see_source.setAttribute("id", "source_link")

        see_live.appendChild(fa_circle)
        see_source.appendChild(fa_brands)

	overlay_cotent.appendChild(section);
