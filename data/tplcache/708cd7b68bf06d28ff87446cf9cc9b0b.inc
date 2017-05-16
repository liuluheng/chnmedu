<div class="smalltitle">
					<h4 class="page-header" style="color: #c75b5f;">{dede:field name='typename'/}<span class="more-captions" style="float:right;"><a href="{dede:field name='typeurl'/}" title="more">more ></a></span></h4>
				</div>
				<ul class="captions captions-5">
            {dede:arclist titlelen='60' row='8'}
					<li class="active">
						<div class="caption">
							<h4 class="title"><a href="[field:typeurl /]"title="">[field:title /]1</a></h4>
							<span class="date" style="float: right;">[field:pubdate function="MyDate('m-d',@me)"/]</span>
						</div>
					</li>
            {/dede:arclist}
				</ul>