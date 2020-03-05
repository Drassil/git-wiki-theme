<div id="main-content" data-inline-comments-target="true" class="wiki-content">
    <div class="table-wrap">
        <table class="confluenceTable" resolved="">
            <thead>
                <tr>
                    <th colspan="4" class="confluenceTh">Mapping from types used in SQL queries</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th class="confluenceTh">
                        <p>MySQL type</p>
                        <th class="confluenceTh">Core type
                    </th>
                    <th class="confluenceTh">Example code</th>
                    <th colspan="1" class="confluenceTh">Variable operators</th>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">bigint(20)</td>
                    <td colspan="1" class="confluenceTd">int64</td>
                    <td colspan="1" class="confluenceTd"><code>int64 val = fields[n].GetInt64();</code></td>
                    <td colspan="1" class="confluenceTd">%I64d&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Capital i)</td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">bigint(20) unsigned</td>
                    <td colspan="1" class="confluenceTd">uint64</td>
                    <td colspan="1" class="confluenceTd"><code><span>uint64 val = fields[n].GetUInt64();</span></code>
                    </td>
                    <td colspan="1" class="confluenceTd">%I64u&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (Capital i)</td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">int(11)</td>
                    <td colspan="1" class="confluenceTd">int32</td>
                    <td colspan="1" class="confluenceTd"><code><span>int32 val = fields[n].GetInt32();</span></code>
                    </td>
                    <td colspan="1" class="confluenceTd"><span>%u</span></td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">int(10) unsigned</td>
                    <td colspan="1" class="confluenceTd">uint32</td>
                    <td colspan="1" class="confluenceTd"><code><span>uint32 val = fields[n].GetUInt32();</span></code>
                    </td>
                    <td colspan="1" class="confluenceTd"><span>%u</span></td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">mediumint(8)</td>
                    <td colspan="1" class="confluenceTd">int32</td>
                    <td colspan="1" class="confluenceTd"><code><span>int32 val = fields[n].GetInt32();</span></code>
                    </td>
                    <td colspan="1" class="confluenceTd"><span>%u</span></td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">mediumint(8) unsigned</td>
                    <td colspan="1" class="confluenceTd">uint32</td>
                    <td colspan="1" class="confluenceTd"><code><span>uint32 val = fields[n].GetUInt32();</span></code>
                    </td>
                    <td colspan="1" class="confluenceTd"><span>%u</span></td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">smallint(6)</td>
                    <td colspan="1" class="confluenceTd">int16</td>
                    <td colspan="1" class="confluenceTd"><code><span>int16 val = fields[n].GetInt16();</span></code>
                    </td>
                    <td colspan="1" class="confluenceTd">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">smallint(5) unsigned</td>
                    <td colspan="1" class="confluenceTd">uint16</td>
                    <td colspan="1" class="confluenceTd"><code><span>uint16 val = fields[n].GetUInt16();</span></code>
                    </td>
                    <td colspan="1" class="confluenceTd">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">tinyint(4)</td>
                    <td colspan="1" class="confluenceTd">int8</td>
                    <td colspan="1" class="confluenceTd"><code><span>int16 val = fields[n].GetInt16();</span></code>
                    </td>
                    <td colspan="1" class="confluenceTd">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">tinyint(3) unsigned</td>
                    <td colspan="1" class="confluenceTd">uint8</td>
                    <td colspan="1" class="confluenceTd"><code><span>uint8 val = fields[n].GetUInt8();</span></code>
                    </td>
                    <td colspan="1" class="confluenceTd">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">float</td>
                    <td rowspan="2" class="confluenceTd">float</td>
                    <td rowspan="2" class="confluenceTd"><code>float val = fields[n].GetFloat();</code></td>
                    <td colspan="1" class="confluenceTd">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">float unsigned</td>
                    <td class="confluenceTd">&nbsp;</td>
                </tr>
                <tr>
                    <td class="confluenceTd">double</td>
                    <td rowspan="2" class="confluenceTd">double</td>
                    <td rowspan="2" class="confluenceTd"><code>double val = fields[n].GetDouble();</code></td>
                    <td colspan="1" class="confluenceTd">&nbsp;</td>
                </tr>
                <tr>
                    <td class="confluenceTd">double unsigned</td>
                    <td class="confluenceTd">&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">text</td>
                    <td rowspan="6" class="confluenceTd">
                        <p style="text-align: center;"><span>string (std::string)</span></p>
                        <p style="text-align: center;"><span>or</span></p>
                        <p style="text-align: center;"><span>cstring (char const*)</span></p>
                    </td>
                    <td rowspan="6" class="confluenceTd">
                        <p><code>std::string text = fields[n].GetString();</code></p>
                        <p><code>char const* text = fields[n].GetCString();</code></p>
                    </td>
                    <td colspan="1" class="confluenceTd">%s</td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">longtext</td>
                    <td class="confluenceTd"><span>%s</span></td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd"><span style="color: rgb(68,68,68);">tinytext</span></td>
                    <td class="confluenceTd"><span style="color: rgb(68,68,68);"><span>%s</span></span></td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">char(k)</td>
                    <td class="confluenceTd"><span>%s</span></td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">varchar(k)</td>
                    <td class="confluenceTd"><span>%s</span></td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">blob</td>
                    <td class="confluenceTd"><span>%s</span></td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">COUNT(x)</td>
                    <td colspan="1" class="confluenceTd">uint64</td>
                    <td colspan="1" class="confluenceTd"><code><span>uint64 count = fields[n].GetUInt64();</span></code>
                    </td>
                    <td colspan="1" class="confluenceTd">%UI64FMT*</td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">MAX(x)</td>
                    <td rowspan="2" class="confluenceTd">uint32 or int32</td>
                    <td rowspan="2" class="confluenceTd">
                        <p><code>uint32 minmax = fields[n].GetUInt32();</code></p>
                        <p><code>int32 minmax = fields[n].GetInt32();</code></p>
                    </td>
                    <td colspan="1" class="confluenceTd">%u</td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">MIN(x)</td>
                    <td class="confluenceTd"><span>%u</span></td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">SUM(x)</td>
                    <td colspan="1" class="confluenceTd">
                        <p style="text-align: center;">string (std::string)</p>
                        <p style="text-align: center;">or</p>
                        <p style="text-align: center;">cstring (char const*)</p>
                    </td>
                    <td colspan="1" class="confluenceTd">
                        <p><code>int sum;</code></p>
                        <p><code>if (const char* ch = fields[n].GetCString())</code></p>
                        <p><code> sum = atoi(ch);</code></p>
                    </td>
                    <td colspan="1" class="confluenceTd">
                        <p>%s</p>
                        <p>&nbsp;</p>
                        <p>%s</p>
                    </td>
                </tr>
                <tr>
                    <td colspan="1" class="confluenceTd">UNIX_TIMESTAMP(x)</td>
                    <td colspan="1" class="confluenceTd">uint64</td>
                    <td colspan="1" class="confluenceTd"><code>uint64 unix_time = fields[n].GetUInt64();</code></td>
                    <td colspan="1" class="confluenceTd">
                        <p>&nbsp;</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <p>1* %UI64FMT does not work with acore_string</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <div class="code panel pdl conf-macro output-block" style="border-width: 1px;" data-hasbody="true"
        data-macro-name="code" data-macro-id="">
        <div class="codeHeader panelHeader pdl" style="border-bottom-width: 1px;"><b>Example</b></div>
        <div class="codeContent panelContent pdl"></div>
	</div>
</div>
		
```cpp
// world database query                           0      1      2      3        4
QueryResult result = WorldDatabase.Query("SELECT guid, entry, name, period, ScriptName FROM transports");
do
{
    Field* fields = result->Fetch();
    uint32 lowguid = fields[0].GetUInt32();
    uint32 entry = fields[1].GetUInt32();
    std::string name = fields[2].GetString();
    uint32 period = fields[3].GetUInt32();
    uint32 scriptId = sObjectMgr->GetScriptId(fields[4].GetCString());
     
    // ...
}
while (result->NextRow());
```
