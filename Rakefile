require "rubygems"
require "bundler/setup"

require "RMagick"
include Magick


desc "Generate thumbnails"
task "gen-thumbs" do
  orig_dir = "media/img/vystavy/orig/"
  thumb_dir = "media/img/vystavy/thumb/"

  rbfiles = File.join(orig_dir, "**", "*.{jpg,jpeg,png}")
  Dir.glob(rbfiles) do |filename|
    puts filename

    orig_img = Image.read(filename).first

    thumb_path = Pathname.new filename.gsub(orig_dir, thumb_dir)
    if !File.directory?(dir = thumb_path.dirname)
      FileUtils.mkdir_p(thumb_path.dirname)
      puts " - created directory: %s" % thumb_path.dirname
    end

    thumb = orig_img.resize_to_fit(621, 100)
    thumb.write thumb_path

    puts " - thumb created: %s" % thumb_path
  end
end
