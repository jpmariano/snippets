videoentity.module
'controller class' => 'VideoEntityUIController',


/**
   * Generates the table headers for the overview table.; copy paste from entity.ui.inc
   */
  protected function overviewTableHeaders($conditions, $rows, $additional_header = array()) {
    $header = $additional_header;
    array_unshift($header, t('Video'));
    if (!empty($this->entityInfo['exportable'])) {
      $header[] = t('Status');
    }
    // Add operations with the right colspan.
    $header[] = array('data' => t('Operations'), 'colspan' => $this->operationCount());
    return $header;
  }