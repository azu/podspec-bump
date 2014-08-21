Pod::Spec.new do |s|
  s.name         = "Example"
  s.version      = "1.0.0"
  s.summary      = "Example text"
  s.homepage     = "https://github.com/Example/Example"
  s.license      = { :type => "MIT", :file => "LICENSE" }
  s.author             = { "Example" => "info@efcl.info" }
  s.social_media_url   = "https://twitter.com/Example_re"
  s.platform     = :ios, "7.0"
  s.source       = { :git => "https://github.com/Example/Example.git", :tag => s.version.to_s }
  s.source_files  = "Classes/**/*.{h,m}"
  s.requires_arc = true
end
