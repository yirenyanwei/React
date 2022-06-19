import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        myhtml: `
        <div class="chat_content_wrapper" data-question-component="">
<div class="d_flex chat_content question_owner">
<div class="img_box_question_answer" hn_user_status="true">
<a rel="nofollow" href="/profiles/19998"><span class="img_user img-circle">
<img data-src="https://cdn.hinative.com/photos/19965/f9f453d266d089942c484188bd0077cbedbd5b79/thumb.png?1420781268" class="" src="https://cdn.hinative.com/photos/19965/f9f453d266d089942c484188bd0077cbedbd5b79/thumb.png?1420781268" width="54" height="54">
</span>
</a></div>
<div class="container_fukidashi">
<div class="user_and_posted_time">
<div class="username_wrapper" hn_user_status="true">
<a class="username" rel="nofollow" href="/profiles/19998">sumitoid</a>
</div>
<div class="time_ago_wrapper">
<span class="timeago" title="2015-01-09T05:37:30Z">2015年1月9日</span>
</div>
</div>
<div class="body_whole_bubble">
<div class="container_whole_bubble">
<div class="arrow_body">
<div class="arrow_left_wrapper">
<p class="owner_arrow"></p>
</div>
</div>
<div class="wrapper_fukidashi">
<div class="additional_header">
<div class="mod_language_details">
<span class="language_detail_icon">
<span class="hs icon-language_native"></span>
</span>
<ul class="detail_items">
<li class="detail_item">
<span class="item_name">
日语
</span>
</li>
</ul>
</div>

<div class="mod_language_details">
<span class="language_detail_icon">
<span class="hs icon-language_study"></span>
</span>
<ul class="detail_items">
<li class="detail_item">
<div class="item_name" data-micromodal-trigger="level_description_modal">
英语 (英国)
<span class="mod_learning_level_icon beginner_intermediate"></span>
</div>
</li>
<li class="detail_item">
<div class="item_name" data-micromodal-trigger="level_description_modal">
英语 (美国)
<span class="mod_learning_level_icon beginner_intermediate"></span>
</div>
</li>
</ul>
</div>

</div>
<div class="box">
<div class="tag_heading">
<div class="tag_format">
<span class="tag">关于<b>英语 (英国)</b> 的问题</span>
</div>
</div>
<div class="table-box">
<h1 class="heading_main">
<div class="q_block">
<div class="mod_question_content_decorated">
 <span class="keyword">TKS</span>  <span>和</span>  <span class="keyword">Thx</span>  有什么区别？如果难以说明的话，请教我一下例句。
</div>
</div>
</h1>
</div>

<div class="desc_box">
Which do you usually use well?
</div>

</div>
<div class="mod_toolbuttons">
<div class="operation">
<div class="toolbutton_item">
<div aria-expanded="false" class="mod_dropdown" data-dropdown="">
<a class="toolbutton_anchor spec_icon_etc" data-dropdown-trigger="true" href="javascript:void(0)"><span class="hs icon-others"></span>
</a><ul aria-hidden="true" class="dropdown_menu ellipsisbutton_menu" data-dropdown-menu="" data-dropdown-placement="bottom-end">
<li><a rel="nofollow" class="dropdown_item" href="/questions/32407/abuse_reports/new">Report copyright infringement</a></li>
</ul>
</div>

</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</div>
        `
    }
    render() {
        return (
            <div>
                <div dangerouslySetInnerHTML={
                    {__html:this.state.myhtml}
                }></div>
            </div>
        )
    }
}
