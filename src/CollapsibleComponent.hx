package ;
import Component.GlobalOptions;
import js.html.Element;
typedef CollapsibleOptions = {
>GlobalOptions,
?accordion:Bool,
?inDuration:Float,
?outDuration:Float

}
@:native("M.Collapsible")
extern class CollapsibleComponent {
    public function new(el:Element, ?options:CollapsibleOptions):Void;
    public static function init(els:Dynamic, ?options:CollapsibleOptions):Array<CollapsibleComponent>;
    public static function getInstance(el:Element):CollapsibleComponent;
    public function destroy():Void;
    public function open(index:Int):Void;
    public function close(index:Int):Void;
}
