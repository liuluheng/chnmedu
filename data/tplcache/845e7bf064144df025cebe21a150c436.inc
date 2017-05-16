<li class=""><a href="{dede:field name='typeurl'/}"><span class="arrow"></span>{dede:field name='typename'/}</a>
                    <div style="display: none;" class="header_list">
                        {dede:channel type='son' noself='yes' }
                        <a href="[field:typelink/]">[field:typename/]</a>
                            {dede:list pagesize="10"}
                            <li>[<b>[field:typelink/]</b>]<a href="[field:arcurl/]" >[field:title/]</a></li>
                            {/dede:list}
                            {dede:channelartlist typeid='1'}
                        
                        {/dede:channel}
                    </div>
                </li>