package ;
import js.html.Element;
typedef CarouselOptions = {
?duration:Float,
?dist:Float,
?shift:Float,
?padding:Float,
?numVisible:Float,
?fullWidth:Bool,
?indicators:Bool,
?noWrap:Bool,
?onCycleTo:Void -> Void
}
@:native("M.Carousel")
extern class Carousel extends Component {
    public function new(el:Element, ?options:CarouselOptions):Void;
	public static function init(els:Dynamic, ?options:CarouselOptions):Array<Carousel>;
	public static function getInstance(el:Element):Carousel;
    public function next(n:Int):Void;
    public function prev(n:Int):Void;
    public function set(n:Int,callback:Dynamic):Void;


}
