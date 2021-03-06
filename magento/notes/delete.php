<?php $products = $this->getConfigurableProducts(); ?>

<?php $helper = Mage:helper('demo'); ?>

<h3>Products</h3>
<?php if ($products-count() > 0 ): ?>
    <ul>
        <?php foreach($products as $product): ?>
            <li>
                <a href="<?php echo $product->getProductURL(); ?>" 
                <?php echo $product->getName(); ?></a>
                <span><?php echo $helper->beautifyPrice($product->getPrice()); ?></span>
            </li>
        <?php endforeach; ?>
    </ul>
<?php else: ?>
    <p>No products are available!</p>
<?php endif; ?>
    