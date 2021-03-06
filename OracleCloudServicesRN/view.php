<rn:meta controller_path="custom/search/AdvancedSearchDialog2" js_path="custom/search/AdvancedSearchDialog2" presentation_css="widgetCss/AdvancedSearchDialog.css" compatibility_set="November '09+"/>

<div id="rn_<?=$this->instanceID;?>" class="rn_AdvancedSearchDialog">
    <a href="javascript:void(0);" id="rn_<?=$this->instanceID;?>_TriggerLink" class="rn_AdvancedLink"><?=$this->data['attrs']['label_link'];?></a>
    <div id="rn_<?=$this->instanceID;?>_DialogContent" class="rn_DialogContent rn_Hidden">
        <!-- <div class="rn_AdvancedKeyword rn_AdvancedSubWidget">
            <rn:widget path="search/KeywordText2" label_text="#rn:msg:SEARCH_TERMS_UC_CMD#"/>
        </div> -->
    <? if(strlen($this->data['searchTypeFilters'])):?>
        <div class="rn_AdvancedSearchType rn_AdvancedSubWidget">
            <rn:widget path="search/SearchTypeList2" filter_list="#rn:php:$this->data['searchTypeFilters']#"/>
        </div>
    <? endif;?>
    <? if($this->data['webSearch']):?>
        <div class="rn_AdvancedSort rn_AdvancedSubWidget">
            <rn:widget path="search/WebSearchSort"/>
            <rn:widget path="search/WebSearchType"/>
        </div>
    <? else:?>
        <? if($this->data['attrs']['display_categories_filter']):?>
        <div class="rn_AdvancedFilter rn_AdvancedSubWidget"><rn:widget path="search/ProductCategorySearchFilter" filter_type="categories" label_input="#rn:msg:LIMIT_BY_CATEGORY_LBL#" label_nothing_selected="#rn:msg:SELECT_A_CATEGORY_LBL#"/></div>
        <? endif;?>
        <?if(count($this->data['menuFilters'])):?>
            <?foreach($this->data['menuFilters'] as $filter):?>
            <div class="rn_AdvancedFilter rn_AdvancedSubWidget">
                <rn:widget path="search/FilterDropdown2" filter_name="#rn:php:$filter#" />
            </div>
            <?endforeach;?>
        <?endif;?>
        <? if($this->data['attrs']['display_sort_filter']):?>
        <div class="rn_AdvancedSort rn_AdvancedSubWidget"><rn:widget path="search/SortList3"/></div>
        <? endif;?>
    <? endif;?>
    <? if($this->data['attrs']['search_tips_url']):?>
        <!-- <a class="rn_SearchTips" href="javascript:void(0);" onclick="window.open('<?=$this->data['attrs']['search_tips_url']?>', '', 'scrollbars,resizable,width=720,height=700'); return false;">#rn:msg:SEARCH_TIPS_LBL#</a> -->
    <? endif;?>
    </div>
</div>
