import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.io.IOException;

public class Test
{
    public static void main( String[] args )
    {
        try
        {
            Document Doc = Jsoup.connect( "http://www.bestreferat.ru/referat-32558.html" ).get();
            Elements Tags = Doc.select( "#tags_list a" );

            for ( Element Tag : Tags )
            {
                System.out.println( Tag.text() );
            }
        }
        catch ( IOException e )
        {
            e.printStackTrace();
        }
    }
}
