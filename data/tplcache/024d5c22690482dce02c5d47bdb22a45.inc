<div class="dropdown-menu" id="dropdown-menu1"> 
                            <ul class="nav">
                            {dede:sql sql='Select * from dede_arctype where reid=~id~ ORDER BY id limit 0,7'}
                            <li class="dropdown"><h5 class="title"><a href='[field:typedir/]' [field:rel/]>[field:typename/]</a></h5></li>
                            {/dede:sql}
                            </ul>
                        </div>