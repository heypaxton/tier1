desc 'install'
task :install do
  system 'bundle install'
  system 'npm install'
end

desc 'sass watch'
task :sasswatch do
  system 'bundle exec sass -r sass-globbing --watch assets/sass:assets/css'
end

desc 'jekyll watch'
task :jekyllwatch do
  system 'bundle exec jekyll serve -w --baseurl=""'
end

desc 'browsersync'
task :browsersync do
  system 'browser-sync start --proxy localhost:4000 --files="./_site/*"'
end

desc 'serve'
task :serve do
  threads = []
  %w{browsersync sasswatch jekyllwatch}.each do |tasks|
    threads << Thread.new(tasks) do |task|
      Rake::Task[task].invoke
    end
  end
  threads.each { |thread| thread.join }
end
