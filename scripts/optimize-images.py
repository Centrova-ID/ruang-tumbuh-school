from pathlib import Path
from PIL import Image
import shutil

source = Path('/home/ubuntu/webdev-static-assets')
assets = {
    'ruang-tumbuh-hero.png': (1600, 1200),
    'ruang-tumbuh-atelier.png': (1200, 900),
    'ruang-tumbuh-garden.png': (1200, 900),
    'ruang-tumbuh-library.png': (1200, 900),
}
assets['ruang-tumbuh-mark.png'] = (256, 256)
for filename, max_size in assets.items():
    source_path = source / filename
    output_path = source / filename.replace('.png', '.webp')
    image = Image.open(source_path).convert('RGBA' if filename.endswith('mark.png') else 'RGB')
    image.thumbnail(max_size, Image.Resampling.LANCZOS)
    image.save(output_path, 'WEBP', quality=82, method=6)
    print(output_path)

asset_folder = source / 'ruang-tumbuh'
asset_folder.mkdir(exist_ok=True)
for output in source.glob('ruang-tumbuh-*.webp'):
    shutil.copy2(output, asset_folder / output.name)

mark = Image.open(source / 'ruang-tumbuh-mark.png').convert('RGBA')
mark.thumbnail((64, 64), Image.Resampling.LANCZOS)
mark.save(asset_folder / 'favicon.png', 'PNG', optimize=True)
mark.save(asset_folder / 'favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)], optimize=True)
print(asset_folder / 'favicon.ico')
