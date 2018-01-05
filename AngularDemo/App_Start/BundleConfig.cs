using System.Web;
using System.Web.Optimization;

namespace AngularDemo
{
	public class BundleConfig
	{
		// For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
		public static void RegisterBundles(BundleCollection bundles)
		{

			bundles.Add(new ScriptBundle("~/bundles/AngularJSApp")
					.IncludeDirectory("~/Scripts/Controllers", "*.js")
					.IncludeDirectory("~/Scripts/Factories", "*.js")
					.Include("~/Scripts/AngularJsApp.js"));

			bundles.Add(new StyleBundle("~/Content/css").Include(
					"~/Content/site.css"));
		}
	}
}
