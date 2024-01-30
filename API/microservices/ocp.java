public interface Report {}

class TsvReport implements Report {
  Object[][] data;
  public TsvReport(Object[][] data) {
    this.data = data;
  }
}

class CsvReport implements Report {
  Object[][] data;
  public CsvReport(Object[][] data) {
    this.data = data;
  }
}

public class ReportGenerator {
  public void generate(Report report) {
    if(report instanceof TsvReport) {
      //create TsvReport report
    } else if(report instanceof CsvReport) {
      //create CsvReport report
    }
  }
}

public class Main {
  public static void main(String[] args) {
    ReportGenerator generator = new ReportGenerator();
    generator.generate(new TsvReport(somedata));
    generator.generate(new CsvReport(somedata));
  }
}

public interface Report {
  public void generate();
}
class TsvReport implements Report {
  Object[][] data;
  public TsvReport(Object[][] data) {
    this.data = data;
  }
  @Override
  public void generate() {
    //generate TsvReport report
  }
}
class CsvReport implements Report {
  Object[][] data;
  public CsvReport(Object[][] data) {
    this.data = data;
  }
  @Override
  public void generate() {
    //generate CsvReport report
  }
}
public class ReportGenerator {
  public void generate(Report report) {
    //pre-processing
    report.generate();
    //post-processing
  }
}
ReportGenerator generator = new ReportGenerator();
generator.generate(new TsvReport(somedata));
generator.generate(new CsvReport(somedata));